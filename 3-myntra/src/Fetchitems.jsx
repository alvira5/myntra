import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "./store/itemsSlice";
import { fetchStatusActions } from "./store/fetchStatusSlice";
// import { fetchStatus } from "./store/fetchStatusSlice";
const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStart());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinish());
        dispatch(itemsActions.addInitialItems(items[0]));
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted"); // Optional: avoid logging as error
        } else {
          console.error("Fetch failed:", err);
          dispatch(fetchStatusActions.markFetchFinish()); // Still finish fetch
        }
      });

    return () => {
      controller.abort(); // This triggers AbortError
    };
  }, [fetchStatus]);

  return (
    <>
      {/* Fetch Done : {fetchStatus.fetchDone} */}
      {/* Currently Fetching : {fetchStatus.currentlyFetch} */}
    </>
  );
};
export default Fetchitems;
