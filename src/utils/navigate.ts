import { useNavigate } from "react-router-dom";

export function navigate(rota: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    navigate(rota);
}