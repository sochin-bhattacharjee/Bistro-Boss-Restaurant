import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure/useAxiosSecure";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);
        useEffect(() => {
            const getMenu = async () => {
                try {
                    const response = await axiosSecure.get('/menu');
                    setMenu(response.data);
                } catch (error) {
                    console.log(error);
                }finally {
                    setLoading(false);
                }
            }
            getMenu();
        } , [])
        return [menu , loading]
}

export default useMenu