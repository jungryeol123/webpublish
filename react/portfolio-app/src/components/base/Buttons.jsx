import { useState } from "react";

export function Buttons({titles}) {
    const [titel,setTitle] = useState("All");

    return (
        <ul className="categories">
            {titles && titles.map(item =>
               <li><button class="category selected">{item.title}<span class="category-count ">{item.count}</span></button></li>   
            )}
            </ul>
    );
}