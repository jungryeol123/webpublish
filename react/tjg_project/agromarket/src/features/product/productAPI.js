import { axiosGet, axiosGetParams } from "shared/lib/axiosInstance";
import {
  setProductList,
  setProduct,
  setProductReviewList,
  setProductQnAList,
} from "./productSlice";

export const setProductListAPI = (keyword) => async (dispatch) => {
  console.log("keyword", keyword);
  //  const result = await axiosGet("/data/foodData.json");
  const result = await axiosGet("http://localhost:8080/product/productList");
  console.log("result", result);
  if (result !== null && Array.isArray(result)) {
    dispatch(setProductList({ result: result }));
  }
};

export const setProductAPI = (id) => async (dispatch) => {
  const url = "http://localhost:8080/product/productDetail";
  const params = { "id" : id };
  
  const jsonData = await axiosGetParams(url, { params });

  // null이 아닐경우만 실행
  if(jsonData && Object.keys(jsonData).length > 0){
    dispatch(setProduct({ product: jsonData }));
  }
};

export const setProductReviewListAPI = () => async (dispatch) => {
  try {
    const result = await axiosGet(
      "http://localhost:8080/product/productReviewList"
    );
    console.log("resultReview (before parse):", result);

    // ✅ 문자열 JSON → 실제 배열로 변환
    const parsed = result.map((item) => ({
      ...item,
      images:
        typeof item.images === "string" ? JSON.parse(item.images) : item.images,
      tags: typeof item.tags === "string" ? JSON.parse(item.tags) : item.tags,
    }));

    console.log("resultReview (after parse):", parsed);

    // ✅ Redux에 저장
    dispatch(setProductReviewList({ result: parsed }));
  } catch (error) {
    console.error("리뷰 데이터 불러오기 실패:", error);
  }
};

export const setProductQnAListAPI = () => async (dispatch) => {
  const result = await axiosGet("http://localhost:8080/product/productQnAList");
  console.log("productQnAList", result);
  dispatch(setProductQnAList({"result" : result}));
};


export const setProductBestListAPI = async() =>  {
    const result = await axiosGet("http://localhost:8080/product/productBestList");
    console.log("result12", result);
    return result;

}

// // 상품 디테일 정보 취득
// export const getProductDetail = (pid) => async (dispatch) => {
//   const url = "/product/detail";
//   const param = { pid: pid };
//   // const jsonData = await axiosGet(url, param); // detail 연동
//   // dispatch(setProduct());
// };
