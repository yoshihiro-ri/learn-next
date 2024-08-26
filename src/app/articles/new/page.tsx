import React from "react";

function CreateBlogPage() {
  return (
    <div className="main-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <form className="bg-gray-800 p-4">
        <div className="mt-4">
          <label>URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none text-gray-800"
          />
        </div>
        <div className="mt-4">
          <label >タイトル</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none text-gray-800"
          />
        </div>
        <div className="mt-4">
          <label >本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none text-gray-800"
          />
        </div>
        <button type="submit" className="mt-4 py-1 px-2 border border rounded-md text-white text-sm">投稿</button>
      </form>
    </div>
  );
}

export default CreateBlogPage;
