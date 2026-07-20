import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sovereign Command Center',
  description: 'Internal Admin Dashboard',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {children}
    </div>
  );
}
