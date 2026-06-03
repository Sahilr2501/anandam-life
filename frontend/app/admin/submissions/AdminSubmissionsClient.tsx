"use client";

import { useEffect, useState, useRef } from "react";
import {
  CalendarDays,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Star,
  User,
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  RefreshCw,
  Eye,
  CheckCircle2,
  Archive,
  MoreHorizontal,
  Inbox,
  Reply,
  Trash2,
} from "lucide-react";

interface ContactSubmission { 
  id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  createdAt: string;
  status?: "new" | "read" | "replied" | "archived";
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

function formatDateUTC(value?: string) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "—";
  return dateFormatter.format(d);
}

const statusConfig = {
  new: { label: "New", color: "bg-amber-50 text-amber-700 border-amber-200", icon: Star },
  read: { label: "Read", color: "bg-orange-50 text-orange-700 border-orange-200", icon: Eye },
  replied: { label: "Replied", color: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: CheckCircle2 },
  archived: { label: "Archived", color: "bg-stone-50 text-stone-600 border-stone-200", icon: Archive },
};

type FilterType = "all" | "new" | "read" | "replied" | "archived";

export default function AdminSubmissionsClient({ initialContacts }: { initialContacts: ContactSubmission[] }) {
  const [contacts, setContacts] = useState<ContactSubmission[]>(initialContacts);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedMessageId, setExpandedMessageId] = useState<string | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const itemsPerPage = 10;

  // Refresh data from API (GET only)
  async function refreshSubmissions() {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/contact-submissions");
      const data = await response.json();
      setContacts(data.submissions || []);
    } catch (error) {
      console.error("Failed to fetch submissions:", error);
    } finally {
      setLoading(false);
    }
  }

  // Update status - call backend
  async function updateStatus(id: string, newStatus: ContactSubmission["status"]) {
    if (!newStatus) return;
    
    setOpenMenuId(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/contact-submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || `Failed to update status (${res.status})`);
      }

      await refreshSubmissions();
      console.log(`Updated ${id} status to ${newStatus}`);
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Failed to update status. Check console for details.");
    } finally {
      setLoading(false);
    }
  }

  // Delete submission - call backend
  async function deleteSubmission(id: string) {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    setOpenMenuId(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/contact-submissions/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || `Failed to delete (${res.status})`);
      }

      await refreshSubmissions();
      console.log(`Deleted submission ${id}`);
    } catch (error) {
      console.error("Failed to delete submission:", error);
      alert("Failed to delete submission. Check console for details.");
    } finally {
      setLoading(false);
    }
  }

  // Toggle message expansion
  function toggleMessage(id: string) {
    setExpandedMessageId(expandedMessageId === id ? null : id);
  }

  // Filter contacts based on search and status
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = searchQuery === "" || 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.service.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || contact.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Stats
  const newCount = contacts.filter((c) => c.status === "new").length;
  const readCount = contacts.filter((c) => c.status === "read").length;
  const repliedCount = contacts.filter((c) => c.status === "replied").length;
  const archivedCount = contacts.filter((c) => c.status === "archived").length;

  const filterButtons: { label: string; value: FilterType; count?: number }[] = [
    { label: "All", value: "all", count: contacts.length },
    { label: "New", value: "new", count: newCount },
    { label: "Read", value: "read", count: readCount },
    { label: "Replied", value: "replied", count: repliedCount },
    { label: "Archived", value: "archived", count: archivedCount },
  ];

  // Export to CSV
  function exportToCSV() {
    const headers = ["Name", "Email", "Phone", "Service", "Preferred Date", "Preferred Time", "Message", "Status", "Submitted Date"];
    const csvData = filteredContacts.map(contact => [
      contact.name,
      contact.email,
      contact.phone || "",
      contact.service,
      contact.preferredDate || "",
      contact.preferredTime || "",
      contact.message?.replace(/,/g, " ").replace(/\n/g, " ") || "",
      statusConfig[contact.status || "new"].label,
      new Date(contact.createdAt).toLocaleString(),
    ]);
    
    const csvContent = [headers, ...csvData].map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contact-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Close dropdown when clicking outside
  const openMenuIdRef = useRef<string | null>(null);
  openMenuIdRef.current = openMenuId;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Read latest value without making the effect depend on it
      if (openMenuIdRef.current) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-menu') && !target.closest('.dropdown-button')) {
          setOpenMenuId(null);
        }
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);


  // Filter bar component
  const FilterBar = () => (
    <div className="mb-6 flex flex-wrap gap-2">
      {filterButtons.map((filter) => (
        <button
          key={filter.value}
          onClick={() => { setStatusFilter(filter.value); setCurrentPage(1); }}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
            statusFilter === filter.value
              ? "bg-[#AA5A00] text-white shadow-md"
              : "bg-white text-[#562F00] border border-[#FFCE99]/50 hover:bg-[#FFF7EB]"
          }`}
        >
          {filter.label}
          {filter.count !== undefined && filter.count > 0 && (
            <span className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs ${
              statusFilter === filter.value
                ? "bg-white/20 text-white"
                : "bg-[#FFF5E5] text-[#AA5A00]"
            }`}>
              {filter.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E5] to-[#FFFDF1]">
      <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#AA5A00]">Admin Panel</p>
            <h1 className="text-3xl font-bold text-[#2F1500]">Contact Submissions</h1>
            <p className="mt-1 text-sm text-[#7A4A1A]">Manage and track all incoming contact and appointment requests.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={exportToCSV} 
              className="inline-flex items-center gap-2 rounded-xl border border-[#FFCE99]/50 bg-white px-4 py-2 text-sm font-medium text-[#562F00] shadow-sm transition-all hover:bg-[#FFF7EB]"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
            <button 
              onClick={refreshSubmissions} 
              className="inline-flex items-center gap-2 rounded-xl border border-[#FFCE99]/50 bg-white px-4 py-2 text-sm font-medium text-[#562F00] shadow-sm transition-all hover:bg-[#FFF7EB]"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <a 
              href="/admin/dashboard" 
              className="inline-flex items-center gap-2 rounded-xl bg-[#AA5A00] px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-[#8B4700]"
            >
              Back to Dashboard
            </a>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#AA5A00]/60" />
            <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }} 
              placeholder="Search by name, email, or service..." 
              className="h-10 w-full rounded-xl border border-[#FFCE99]/50 bg-white pl-9 pr-4 text-sm text-[#2F1500] placeholder:text-[#7A4A1A]/50 focus:border-[#AA5A00] focus:outline-none focus:ring-2 focus:ring-[#FFCE99]/50" 
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <FilterBar />

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-[#FFCE99]/30 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-[#FFCE99]/30 bg-[#FFF7EB]">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#562F00]">Contact</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#562F00]">Service</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#562F00]">Preferred Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#562F00]">Time</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#562F00]">Message</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#562F00]">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#562F00]">Submitted</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#562F00] w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FFCE99]/20">
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center">
                      <div className="flex items-center justify-center gap-2 text-[#7A4A1A]">
                        <RefreshCw className="h-5 w-5 animate-spin" />
                        Loading...
                      </div>
                    </td>
                  </tr>
                ) : paginatedContacts.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <div className="mb-4 rounded-full bg-[#FFF5E5] p-4">
                          <Inbox className="h-8 w-8 text-[#AA5A00]/60" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#2F1500]">No submissions found</h3>
                        <p className="mt-1 text-sm text-[#7A4A1A]">
                          {searchQuery || statusFilter !== "all" 
                            ? "Try adjusting your search or filter criteria" 
                            : "Contact form submissions will appear here"}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedContacts.map((item) => {
                    const StatusIcon = statusConfig[item.status || "new"].icon;
                    const isExpanded = expandedMessageId === item.id;
                    const message = item.message?.trim() || "";
                    const shouldTruncate = message.length > 80;
                    return (
                      <tr key={item.id} className="group hover:bg-[#FFFDF5]">
                        <td className="px-4 py-4">
                          <p className="font-medium text-[#2F1500]">{item.name}</p>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                            <a href={`mailto:${item.email}`} className="flex items-center gap-1 text-[#7A4A1A] hover:text-[#AA5A00]">
                              <Mail className="h-3 w-3" />{item.email}
                            </a>
                            {item.phone && (
                              <a href={`tel:${item.phone}`} className="flex items-center gap-1 text-[#7A4A1A] hover:text-[#AA5A00]">
                                <Phone className="h-3 w-3" />{item.phone}
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex rounded-full bg-[#FFF5E5] px-2.5 py-0.5 text-xs font-medium text-[#AA5A00]">
                            {item.service}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-[#562F00]">
                          {item.preferredDate ? (
                            <div className="flex items-center gap-1.5">
                              <CalendarDays className="h-3.5 w-3.5 text-[#AA5A00]/60" />
                              {formatDateUTC(item.preferredDate)}
                            </div>
                          ) : (
                            <span className="text-[#7A4A1A]/50">—</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-sm text-[#562F00]">
                          {item.preferredTime ? (
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 text-[#AA5A00]/60" />
                              {item.preferredTime}
                            </div>
                          ) : (
                            <span className="text-[#7A4A1A]/50">—</span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          {message ? (
                            <div className="max-w-xs">
                              <p className={`text-sm text-[#562F00] ${!isExpanded && shouldTruncate ? "line-clamp-2" : ""}`}>
                                {message}
                              </p>
                              {shouldTruncate && (
                                <button 
                                  onClick={() => toggleMessage(item.id)} 
                                  className="mt-1 text-xs font-medium text-[#AA5A00] hover:underline"
                                >
                                  {isExpanded ? "Show less" : "Read more"}
                                </button>
                              )}
                            </div>
                          ) : (
                            <span className="text-sm text-[#7A4A1A]/50">No message</span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusConfig[item.status || "new"].color}`}>
                            <StatusIcon className="h-3 w-3" />
                            {statusConfig[item.status || "new"].label}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-[#7A4A1A]">
                          {formatDateUTC(item.createdAt)}
                        </td>
                        <td className="px-4 py-4 text-center relative">
                          <div className="dropdown-button relative">
                            <button 
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                setOpenMenuId(openMenuId === item.id ? null : item.id); 
                              }} 
                              className="rounded-lg p-1.5 text-[#AA5A00]/40 transition-colors hover:bg-[#FFF5E5] hover:text-[#AA5A00]"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </button>
                            
                            {openMenuId === item.id && (
                              <div 
                                className="dropdown-menu fixed z-50 w-56 rounded-lg border border-[#FFCE99]/30 bg-white shadow-lg"
                                style={{
                                  top: 'auto',
                                  left: 'auto',
                                  transform: 'translateX(-90%)'
                                }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="py-1">
                                  {item.status !== "read" && (
                                    <button 
                                      onClick={() => updateStatus(item.id, "read")} 
                                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-[#562F00] transition-colors hover:bg-[#FFF7EB]"
                                    >
                                      <Eye className="h-4 w-4" />
                                      Mark as read
                                    </button>
                                  )}
                                  {item.status !== "replied" && (
                                    <button 
                                      onClick={() => updateStatus(item.id, "replied")} 
                                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-[#562F00] transition-colors hover:bg-[#FFF7EB]"
                                    >
                                      <Reply className="h-4 w-4" />
                                      Mark as replied
                                    </button>
                                  )}
                                  {item.status !== "archived" && (
                                    <button 
                                      onClick={() => updateStatus(item.id, "archived")} 
                                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-[#562F00] transition-colors hover:bg-[#FFF7EB]"
                                    >
                                      <Archive className="h-4 w-4" />
                                      Archive
                                    </button>
                                  )}
                                  <hr className="my-1 border-[#FFCE99]/30" />
                                  <button 
                                    onClick={() => deleteSubmission(item.id)} 
                                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && filteredContacts.length > 0 && totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-[#FFCE99]/30 px-4 py-3">
              <p className="text-sm text-[#7A4A1A]">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredContacts.length)} of {filteredContacts.length} results
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#FFCE99]/50 text-[#562F00] hover:bg-[#FFF7EB] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                        currentPage === pageNum
                          ? "bg-[#AA5A00] text-white"
                          : "border border-[#FFCE99]/50 text-[#562F00] hover:bg-[#FFF7EB]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#FFCE99]/50 text-[#562F00] hover:bg-[#FFF7EB] disabled:opacity-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}