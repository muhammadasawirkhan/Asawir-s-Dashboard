import React, { useRef, useState } from 'react';
import { TfiCloudUp } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';

const UploadDocumentModal = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [documents, setDocuments] = useState([]);

  if (!isOpen) return null;

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSave = () => {
    if (!fileName || !description) {
      alert("Please upload a file and enter a description.");
      return;
    }
    setDocuments([
      ...documents,
      {
        id: Date.now(),
        fileName,
        description,
        isEditing: false,
      },
    ]);
    setFileName("");
    setDescription("");
    fileInputRef.current.value = null;
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const handleEdit = (id) => {
    setDocuments(
      documents.map((doc) =>
        doc.id === id ? { ...doc, isEditing: true } : doc
      )
    );
  };

  const handleSaveEdit = (id, newDescription) => {
    setDocuments(
      documents.map((doc) =>
        doc.id === id
          ? { ...doc, description: newDescription, isEditing: false }
          : doc
      )
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto p-4">
      <div className="bg-white flex flex-col rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-orange-400"
        >
          &times;
        </button>

        <h2 className="text-[24px] text-[#F16A77] font-[400] mb-4 text-center">
          Upload Document
        </h2>

        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-[#FFF4EF] rounded-[16px] focus:ring-blue-500 focus:border-blue-500 mb-4"
          placeholder="Write description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div
          className="flex flex-col items-center justify-center bg-[#FFF4EF] border-[1px] border-dashed border-[#FCC378] rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition mb-4"
          onClick={handleFileClick}
        >
          <TfiCloudUp className="text-4xl text-gray-500 mb-2" />
          <p className="text-gray-500">{fileName || "Click to upload file"}</p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className='flex flex-row justify-between pt-3'>
          <div className=''>
            <NavLink>
              <button className='bg-[#F16A77] text-[#fff] w-[99px] h-[36px] rounded-[4.5px]'>Cancel
              </button>
            </NavLink>
          </div>
          <div>
          <button
            onClick={handleSave}
            className="bg-[#FCC378] text-[#fff] w-[99px] h-[36px] rounded-[4.5px]"
          >
            Save
          </button>
          </div>
        </div>


        {/* Display Saved Documents */}
        <div className="mt-6 space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="border rounded-lg p-4 flex flex-col gap-2 bg-[#FFF4EF]"
            >
              <p className="font-semibold text-gray-800">File: {doc.fileName}</p>

              {doc.isEditing ? (
                <>
                  <textarea
                    defaultValue={doc.description}
                    rows="2"
                    className="p-2 w-full text-sm text-gray-900 bg-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                    onBlur={(e) => handleSaveEdit(doc.id, e.target.value)}
                  ></textarea>
                  <p className="text-xs text-gray-500">
                    Click outside to save changes
                  </p>
                </>
              ) : (
                <p className="text-gray-700">Description: {doc.description}</p>
              )}

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(doc.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(doc.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentModal;
