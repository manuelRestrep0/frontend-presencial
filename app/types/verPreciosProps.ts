interface VerPreciosProps {
    originCity: string;
    destinationCity: string;
    tripType: string;
    applyFilter?: (filter: string) => void;
}