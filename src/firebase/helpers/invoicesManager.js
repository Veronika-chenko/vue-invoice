import { collection, doc, setDoc, getDocs } from 'firebase/firestore';

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
