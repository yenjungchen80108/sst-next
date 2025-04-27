// need the force-dynamic because we don’t want Next.js to cache the pre-signed URL.
export const dynamic = "force-dynamic";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Resource } from "sst";
import Form from "@/components/form";
import styles from "./page.module.css";

// console.log(Resource.MyBucket);

export default async function Home() {
  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: Resource.MyBucket.name,
  });

  const url = await getSignedUrl(new S3Client({}), command, {
    expiresIn: 60 * 5,
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Form url={url} />
      </main>
    </div>
  );
}
