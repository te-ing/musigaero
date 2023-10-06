import { Axios } from '@/api/base.api';

const PostCreate = () => {
  const createImageFile = async (formData: FormData) => {
    const { data } = await Axios.post(`/post/image`, formData, {
      headers: { 'Context-Type': 'multipart/form-data' },
    });
    return data;
  };

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    const files = Array.from(event.target.files);

    const formData = new FormData();

    files.forEach((file) => {
      formData.append('file', file);
      formData.append('type', 'image');
    });

    try {
      const response = await createImageFile(formData);
      console.log('response', response);
      // console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      PostCreate
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">
        Upload multiple files
      </label>
      <input
        onChange={uploadImage}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="multiple_files"
        type="file"
        multiple
      />
    </div>
  );
};

export default PostCreate;
