"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  BarChart3,
  LogOut,
  ChevronDown,
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
];

function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 md:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="inline-flex size-10 items-center justify-center rounded-lg hover:bg-muted"
          aria-label="Open sidebar"
        >
          <Menu className="size-5" />
        </button>

        <div className="ml-3 font-semibold">
          Admin Panel
        </div>
      </header>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 border-r bg-background
          transition-transform duration-200
          md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b px-5">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                A
              </div>

              <span className="font-semibold">
                Admin
              </span>
            </div>

            {/* Mobile Close */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 hover:bg-muted md:hidden"
              aria-label="Close sidebar"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3">
            <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Overview
            </p>

            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className="
                      flex items-center gap-3 rounded-lg px-3 py-2.5
                      text-sm font-medium text-muted-foreground
                      transition-colors
                      hover:bg-muted hover:text-foreground
                    "
                  >
                    <Icon className="size-4 shrink-0" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <p className="mb-2 mt-8 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              System
            </p>

            <a
              href="/admin/settings"
              onClick={() => setSidebarOpen(false)}
              className="
                flex items-center gap-3 rounded-lg px-3 py-2.5
                text-sm font-medium text-muted-foreground
                hover:bg-muted hover:text-foreground
              "
            >
              <Settings className="size-4" />
              Settings
            </a>
          </nav>

          {/* User */}
          <div className="border-t p-3">
            <button className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-muted">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted font-medium">
                JD
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  John Doe
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  admin@example.com
                </p>
              </div>

              <ChevronDown className="size-4 text-muted-foreground" />
            </button>

            <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
              <LogOut className="size-4" />
              Sign out
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="min-h-screen md:pl-64">
        <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;