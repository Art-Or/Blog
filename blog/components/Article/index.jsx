import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Article = ({ className, children, backUrl }) => {
    return (
        <article className={cl(className, styles.article)}>
            <Link href={backUrl} className={styles.articleBack}>
                <AiOutlineArrowLeft />
            </Link>
            <div className={styles.articleContent}>{children}</div>
        </article>
    );
};

export default Article;
