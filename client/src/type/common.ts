export type S3ImageResponse = {
  fieldname: string;
  originalname: string;
  mimetype: string;
  key: string;
  contentType: string;
  metadata: {
    owner: string;
  };
  location: string;
};
