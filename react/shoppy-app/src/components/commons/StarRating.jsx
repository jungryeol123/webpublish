import React from 'react';
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";

export function StarRating({totalRate, style}) {
    
    const stars = [...Array(5)];
    const color = (style === "star-coral") ? "coral" : "black";
    // let fillStars,halfStar,emptyStar = 0;
    // if(totalRate > 0 && totalRate <=5) {
    //     const fillStars = Math.floor(totalRate);  //채워진 별 갯수
    //     const halfStar = (totalRate%1) !== 0;     //반별 여부 체크
    //     const emptyStar = 5 - (fillStars + (halfStar ? 1 : 0)); //빈별 갯수
    // }
    const fillStars = Math.floor(totalRate);  //채워진 별 갯수
    const halfStar = (totalRate%1) !== 0;     //반별 여부 체크
    const emptyStar = 5 - (fillStars + (halfStar ? 1 : 0)); //빈별 갯수

    return (
        <div className='star-rating'>
            {/* fillStar : 채워진 별 추가 */}
            { [...Array(fillStars)].map((_,i) =>
                <span key ={i}
                      className={style.concat("", color)}>
                    < TbStarFilled color= {color} />
                </span>
                )}
            {/* halfStar : 반별 추가 */}
            {   halfStar &&
                <span key ={halfStar}
                className={style.concat("", color)}>
                    < TbStarHalfFilled color= {color}/>
                </span>
                }
            {/* emptyStar : 빈별 추가 */}
            { [...Array(emptyStar)].map((_,i) =>
                <span key ={i}
                        className={style.concat("", color)}>
                    < TbStar color= {color}/>
                </span>
                )}
            {/* 별점 표시 */}
            { style === "star-coral" &&
                <>
                <span className={style.concat("number")}>{totalRate}</span>
                </>
            }
        </div>
        
    );
}

