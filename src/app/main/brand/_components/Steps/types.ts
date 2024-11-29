export interface StepOptionProps<T> {
  goNext: () => void;
  goBack: () => void;
  onClose?: () => void;
  onEnd?: () => void;
  currentStep: number;
  maxStep: number;
}
