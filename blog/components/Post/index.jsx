import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/client";
import Title from "@/components/Title";

const Post = ({ className, image, title, description, slug }) => {
    // console.log(urlFor(image).url());

    return (
        <Link
            href={`/post/${encodeURIComponent(slug.current)}`}
            className={cl(className, styles.post, styles.postLink)}
        >
            <Title type="small" className={styles.postTitle}>
                {title}
            </Title>
            <div className={styles.postContent}>
                <div>
                    <Image
                        src={urlFor(image).url()}
                        alt={image.caption}
                        width={100}
                        height={100}
                    />
                </div>
                <p className={styles.postDescription}>{description}</p>
            </div>
        </Link>
    );
};

export default Post;
