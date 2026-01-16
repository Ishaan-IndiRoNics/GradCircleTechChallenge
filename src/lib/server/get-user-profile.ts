
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { User, Pet, Post } from '@/lib/types';

export async function getUserProfile(userId: string) {
  const userDocRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) {
    return null;
  }

  const user = userDoc.data() as User;

  const petsColRef = collection(db, `users/${userId}/pets`);
  const petsSnapshot = await getDocs(petsColRef);
  const pets = petsSnapshot.docs.map(doc => ({ petId: doc.id, ...doc.data() } as Pet));

  const postsColRef = collection(db, `posts`);
  const postsSnapshot = await getDocs(postsColRef);
  const posts = postsSnapshot.docs
    .map(doc => ({ postId: doc.id, ...doc.data() } as Post))
    .filter(post => post.userId === userId);

  return { user, pets, posts };
}
