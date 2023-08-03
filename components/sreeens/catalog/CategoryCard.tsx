import React, {FC} from 'react';
import {ICategory} from "@/types/category.interface";
import Link from "next/link";


const CategoryCard: FC<ICategory> = (props) => {
    return (
        <Link href={`catalog/${props.slug}`}>
            {props.name}
        </Link>
    );
};

export default CategoryCard;