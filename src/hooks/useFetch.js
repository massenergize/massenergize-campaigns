import { useEffect } from "react";
import useRefState from "./useRefState";
import { fetchData } from "../helpers/utils/http";

/**
 *
 * @param url {String}
 * @param [fetcher] {Function}
 * @param [options] {Object}
 * @returns {{
 *  data: undefined|*,
 *  error: Error,
 *  loading: Boolean,
 *  isValidating: Boolean,
 *  onError: Function,
 *  onSuccess: Function,
 *  onAbort: Function,
 *  onSucces : Function
 * }}
 */
export default function useFetch (url, fetcher, options = {}) {
  const [ loading, loadingRef, setLoading ] = useRefState(true);
  const [ isValidating, isValidatingRef, setIsValidating ] = useRefState(true);
  const [ error, errorRef, setError ] = useRefState(null);
  const [ data, dataRef, setData ] = useRefState(options.initialData);

  fetcher = fetcher || fetchData;

  useEffect(() => {
    if (!url) {
      return;
    }
    console.log({ url, options })

    const getData = async () => {
      try {
        setLoading(true);
        setIsValidating(true);
        let data = await fetcher(url, options.data, options.errorCode, options.handlers);

        if (data) {
          setLoading(false)
          setIsValidating(false)
          setData(data);

          if (options.onSuccess && typeof options.onSuccess === 'function') {
            options.onSuccess(data, url);
          }
        }
      } catch (e) {
        setLoading(false);
        setLoading(false);
        setError(e);

        if (options.onError && typeof options.onError === 'function') {
          options.onError(e, url);
        }
      }
    }

    getData();

    // abort on unmount and when url changes
    return () => {
      if (options.onAbort && typeof options.onAbort === 'function') {
        options.onAbort(url);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ url ]);

  return { data, error, loading }
}
