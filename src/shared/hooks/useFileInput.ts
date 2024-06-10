import { useCallback, useState } from 'react';

interface FileInput {
  selectedFile: File | null;
  previewUrl: string | null;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFileInput = (): FileInput => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const base64Data = fileReader.result;
        setPreviewUrl(base64Data as string);
      };
      fileReader.readAsDataURL(file);
    }
  }, []);

  return { selectedFile, previewUrl, handleFileChange };
};
