"use client";

import TopContent from "./TopContent";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  type SortDescriptor,
  type Selection,
} from "@nextui-org/react";

import { type TableProps } from "../types/table.types";
import BottomContent from "./BottomContent";
import { useCallback, useMemo, useState } from "react";

import { useSearch } from "~/hooks";
import TableLoader from "./TableLoader";
import { useThemeContext } from "~/lib/context/Theme.context";

const DataTable = <T,>({
  headerConfig,
  columns,
  data,
  isLoading = false,
  renderCell,
  hasTopContent = true,
  removeWrapper,
  hasBottomContent = true,
  filterKeys,
  footerConfig,
}: TableProps<T>) => {
  const [filterValue, setFilterValue] = useState("");
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  const { onSearch, newList } = useSearch({
    data,
    keys: filterKeys ?? "",
  });

  useMemo(() => {
    onSearch(filterValue);
  }, [data, filterValue, statusFilter]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return newList.slice(start, end);
  }, [page, newList, rowsPerPage]);

  // TODO: sorted columns
  const sortedItems = useMemo(() => {
    return [...items].sort((a: T, b: T) => {
      const first = a[sortDescriptor.column as keyof T] as number;
      const second = b[sortDescriptor.column as keyof T] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const pages = Math.ceil(newList.length / rowsPerPage);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  return (
    <>
      {isLoading ? (
        <TableLoader />
      ) : (
        <Table
          className="dark:text-white"
          classNames={{
            wrapper: "dark:bg-default-200/80",
          }}
          color="primary"
          isHeaderSticky
          aria-label="Data table"
          selectionMode="none"
          topContentPlacement="outside"
          topContent={
            hasTopContent && (
              <TopContent
                lenght={data.length}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                setPage={setPage}
                setRowsPerPage={setRowsPerPage}
                {...headerConfig}
              />
            )
          }
          bottomContent={
            hasBottomContent && (
              <BottomContent
                page={page}
                setPage={setPage}
                onNextPage={onNextPage}
                onPreviousPage={onPreviousPage}
                pages={pages}
                {...footerConfig}
              />
            )
          }
          bottomContentPlacement="outside"
        >
          <TableHeader className="dark:shadow-none" columns={columns}>
            {({ uid, align, sorting, name }) => (
              <TableColumn
                key={uid}
                align={align ?? "start"}
                allowsSorting={sorting}
              >
                {name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={sortedItems} emptyContent="Data not found">
            {(item: any) => (
              <TableRow key={item.name}>
                {(columnKey) => {
                  return (
                    <TableCell align="justify">
                      {renderCell
                        ? renderCell(item, columnKey)
                        : getKeyValue(item, columnKey)}
                    </TableCell>
                  );
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default DataTable;
