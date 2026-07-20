import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Register fonts if needed, or use standard PDF fonts
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0a0a0a',
    padding: 60,
    fontFamily: 'Helvetica',
    position: 'relative',
  },
  border: {
    position: 'absolute',
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
    borderWidth: 2,
    borderColor: '#333',
  },
  header: {
    marginBottom: 100,
  },
  brandName: {
    color: '#C9A227', // Gold
    fontSize: 28,
    letterSpacing: 4,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  brandSubtitle: {
    color: '#666',
    fontSize: 10,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 8,
    textTransform: 'uppercase',
  },
  mainContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preparedFor: {
    color: '#888',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 16,
  },
  clientName: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#C9A227',
    paddingBottom: 8,
  },
  portfolioText: {
    color: '#C9A227',
    fontSize: 16,
    marginTop: 20,
    letterSpacing: 6,
    textTransform: 'uppercase',
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    left: 60,
    right: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 20,
  },
  footerText: {
    color: '#555',
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});

interface BrochurePDFProps {
  clientName: string;
}

export const BrochurePDF: React.FC<BrochurePDFProps> = ({ clientName }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.border} />
      
      <View style={styles.header}>
        <Text style={styles.brandName}>Kumar Magnacity</Text>
        <Text style={styles.brandSubtitle}>The Sovereign Living • Manjari, Pune</Text>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.preparedFor}>Confidential Allocation Portfolio Prepared Exclusively For</Text>
        <Text style={styles.clientName}>{clientName}</Text>
        <Text style={styles.portfolioText}>Executive Brochure</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Kumar Properties • 59 Years of Legacy</Text>
        <Text style={styles.footerText}>RERA Registered • Phase 1</Text>
      </View>
    </Page>
    
    <Page size="A4" style={{ backgroundColor: '#ffffff', padding: 60, fontFamily: 'Helvetica' }}>
       <View>
         <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#111', marginBottom: 20 }}>Master Layout & Pricing</Text>
         <Text style={{ fontSize: 12, color: '#666', lineHeight: 1.6, marginBottom: 40 }}>
           Welcome to the Sovereign allocation of Kumar Magnacity. This document contains the official pricing structures and cluster inventory for the upcoming Phase 1 launch. Your dedicated Relationship Manager will guide you through the priority allocation process.
         </Text>
         
         <View style={{ backgroundColor: '#f9f9f9', padding: 20, borderLeftWidth: 4, borderLeftColor: '#C9A227', marginBottom: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#111', marginBottom: 8 }}>2 BHK Premium Flats</Text>
            <Text style={{ fontSize: 12, color: '#666' }}>Starting from ₹67.99 Lacs* | 750+ Sq.Ft Carpet</Text>
         </View>
         
         <View style={{ backgroundColor: '#f9f9f9', padding: 20, borderLeftWidth: 4, borderLeftColor: '#C9A227', marginBottom: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#111', marginBottom: 8 }}>3 BHK Sovereign Flats</Text>
            <Text style={{ fontSize: 12, color: '#666' }}>Starting from ₹98.99 Lacs* | 1050+ Sq.Ft Carpet</Text>
         </View>
         
         <View style={{ backgroundColor: '#f9f9f9', padding: 20, borderLeftWidth: 4, borderLeftColor: '#C9A227' }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#111', marginBottom: 8 }}>NA Bungalow Plots</Text>
            <Text style={{ fontSize: 12, color: '#666' }}>Starting from ₹1.2 Cr* | Premium Cluster Allocations</Text>
         </View>
         
       </View>
       <View style={{ position: 'absolute', bottom: 60, left: 60, right: 60 }}>
          <Text style={{ fontSize: 10, color: '#999', textAlign: 'center' }}>Strictly Confidential. Subject to final RERA approvals. Prices indicative.</Text>
       </View>
    </Page>
  </Document>
);
