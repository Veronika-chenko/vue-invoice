import {
  collection,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebaseInit';

const INVOICES = 'invoices';

export async function setInvoice(invoice) {
  const invoiceRef = doc(collection(db, INVOICES));
  await setDoc(invoiceRef, invoice);
}

export async function getInvoices() {
  try {
    const invoiceRef = collection(db, INVOICES);
    const invoicesData = await getDocs(invoiceRef);
    return invoicesData;
  } catch (e) {
    console.log('Error getting cached document:', e);
  }
}

export async function updateInvoiceService(invoiceId, invoiceData) {
  try {
    const invoiceRef = doc(db, INVOICES, invoiceId);
    await updateDoc(invoiceRef, invoiceData);
    return;
  } catch (e) {
    console.log('Error getting cached document:', e);
  }
}

export async function deleteInvoiceService(invoiceId) {
  try {
    const invoiceRef = doc(db, INVOICES, invoiceId);
    await deleteDoc(invoiceRef, invoiceId);
  } catch (e) {
    console.log('Error getting cached document:', e);
  }
}

export async function updateStatusService(invoiceId, fieldsToUpdate) {
  try {
    const invoiceRef = doc(db, INVOICES, invoiceId);
    await updateDoc(invoiceRef, fieldsToUpdate);
    return;
  } catch (e) {
    console.log('Error getting cached document:', e);
  }
}
