

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

// Obtener todos los recursos
export const getAllResources = functions.https.onRequest(async (req, res) => {
  const snapshot = await db.collection('resources').get();
  const resources: any[] = [];
  snapshot.forEach((doc) => {
    resources.push({
      id: doc.id,
      data: doc.data()
    });
  });
  res.json(resources);
});

// Obtener un recurso específico por ID
export const getResourceById = functions.https.onRequest(async (req, res) => {
  const resourceId = req.params.id;
  const doc = await db.collection('resources').doc(resourceId).get();
  if (!doc.exists) {
    res.status(404).json({ error: 'Recurso no encontrado' });
  } else {
    res.json({
      id: doc.id,
      data: doc.data()
    });
  }
});

// Crear un nuevo recurso
export const createResource = functions.https.onRequest(async (req, res) => {
  const data = req.body;
  const docRef = await db.collection('resources').add(data);
  res.json({ id: docRef.id });
});

// Actualizar un recurso existente por ID
export const updateResource = functions.https.onRequest(async (req, res) => {
  const resourceId = req.params.id;
  const data = req.body;
  await db.collection('resources').doc(resourceId).set(data, { merge: true });
  res.json({ message: 'Recurso actualizado correctamente' });
});

// Eliminar un recurso por ID
export const deleteResource = functions.https.onRequest(async (req, res) => {
  const resourceId = req.params.id;
  await db.collection('resources').doc(resourceId).delete();
  res.json({ message: 'Recurso eliminado correctamente' });
});