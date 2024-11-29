import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useMemo } from "react";
import { api } from "~/trpc/react";

export const useBrandsExplore = () => {
  const queryClient = useQueryClient();
  const hasBrandExplore = useMemo(() => {
    const brandsKey = getQueryKey(api.brand.explore, undefined, "query");
    const brandsCache = queryClient.getQueryData(brandsKey);
    return Boolean(brandsCache);
  }, []);

  const { data: brandsExplore = [], isLoading } = api.brand.explore.useQuery(
    undefined,
    {
      enabled: !hasBrandExplore,
    },
  );

  return { brandsExplore, isLoading };
};
