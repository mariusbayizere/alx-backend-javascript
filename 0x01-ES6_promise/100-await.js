import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let xx = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    xx = { photo, user };
  } catch (err) {
    xx = { photo: null, user: null };
  }
  return xx;
}
