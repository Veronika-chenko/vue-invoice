import { collection, doc, setDoc } from 'firebase/firestore';

export async function setInvoice(db, collectionName, invoice) {
  const invoiceRef = doc(collection(db, collectionName));
  await setDoc(invoiceRef, invoice);
}
