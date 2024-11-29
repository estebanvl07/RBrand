import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useCallback, useMemo } from "react";
import { api } from "~/trpc/react";

export const useMyBrands = () => {
  const queryClient = useQueryClient();
  const brandsKey = useMemo(
    () => getQueryKey(api.brand.myBrands, undefined, "query"),
    [],
  );

  const hasBrand = useMemo(() => {
    const brandsCache = queryClient.getQueryData(brandsKey);
    return Boolean(brandsCache);
  }, [queryClient, brandsKey]);

  const { data: brands = [], isLoading } = api.brand.myBrands.useQuery(
    undefined,
    {
      enabled: !hasBrand,
    },
  );

  const refreshBrands = useCallback(() => {
    queryClient.invalidateQueries(brandsKey as any);
  }, [queryClient, brandsKey]);

  return { brands, isLoading, refreshBrands };
};
