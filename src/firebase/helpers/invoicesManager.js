import {
  collection,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

export async function setInvoice(db, collectionName, invoice) {
  const invoiceRef = doc(collection(db, collectionName));
  await setDoc(invoiceRef, invoice);
}

export async function getInvoices(db, collectionName) {
  try {
    const invoiceRef = collection(db, collectionName);
    const invoicesData = await getDocs(invoiceRef);
    return invoicesData;
  } catch (e) {
    console.log('Error getting cached document:', e);
  }
}

export async function updateInvoiceService(
  db,
  collectionName,
  invoiceId,
  invoiceData
) {
  try {
    const invoiceRef = doc(db, collectionName, invoiceId);
    await updateDoc(invoiceRef, invoiceData);
    return;
  } catch (e) {
    console.log('Error getting cached document:', e);
  }
}

export async function deleteInvoiceService(db, collectionName, invoiceId) {
  try {
    await deleteDoc(doc(db, collectionName, invoiceId));
  } catch (e) {
    console.log('Error getting cached document:', e);
  }
}
