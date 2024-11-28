export interface StepOptionProps<T> {
  goNext: () => void;
  goBack: () => void;
  currentStep: number;
  maxStep: number;
}
