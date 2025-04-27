"use client";

import styles from "./form.module.css";

export default function Form({ url }: { url: string }) {
  return (
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();

        const file = (e.target as HTMLFormElement).file.files?.[0] ?? null;
        if (!file) return;

        const response = await fetch(url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });

        console.log(response);

        if (response.ok) {
          // open new tab
          window.open(url.split("?")[0], "_blank");
        } else {
          alert("Upload failed");
        }
      }}
    >
      <input type="file" name="file" accept="image/png, image/jpeg" />
      <button type="submit">Upload</button>
    </form>
  );
}
