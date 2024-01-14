export const SWR_CONFIG = {
  // dedupingInterval: 3_600_000,
  // revalidateInterval: 3_600_000,
  // refreshInterval: 3_600_000,

  // setting the following to false disables automatic revalidation
  revalidateIfStale: true,
  revalidateOnFocus: true,
  revalidateOnReconnect: false, // automatically revalidates when network recovers
};
