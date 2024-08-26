import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../../types";

type ArticleListProps = {
  articles: Article[];
};
const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <article className="shadow my-4}" key={article.id}>
          <Link href="#">
            <Image
              src="https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4"
              alt=""
              width={1280}
              height={300}
              className="rounded-t-lg	"
            />
          </Link>
          <div className="bg-zinc-900 py-4 px-4 rounded-lg flex flex-col justify-start">
            <Link href="#" className="text-sm">
              Technology
            </Link>
            <Link href="#" className="font-bold my-2">
              {article.title}
            </Link>
            <Link href="#" className="text-sm">
              {article.content}
            </Link>
            <Link href="#" className="text-sm mt-3">
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
