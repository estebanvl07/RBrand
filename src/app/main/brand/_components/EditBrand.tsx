import React, { useEffect } from "react";

import CreateBrand from "./CreateBrand";

import { useStepper } from "~/components/contexts/StepperProvider";

import type { EditDialogFormProps } from "~/components/types/dialog.types";
import type { BrandWithIncludes } from "../../_types/root";

const EditBrand = ({
  data,
  isOpen,
  onClose,
  onSuccess,
}: EditDialogFormProps<BrandWithIncludes>) => {
  const { setFormData, setIsEdit, setDefaultBrand, onClean } = useStepper();

  useEffect(() => {
    if (data) {
      setIsEdit(true);
      setDefaultBrand && setDefaultBrand(data);
      setFormData({
        name: data.name,
        owner: data.owner,
        description: data.description || "",
      });
    }
  }, [data]);

  return (
    <CreateBrand
      isOpen={isOpen}
      onClose={onClose}
      onCompleted={() => {
        onSuccess && onSuccess();
        onClean();
      }}
    />
  );
};

export default EditBrand;
