import React, { useEffect } from "react";

import { InputTextField } from "../../styles/styles"

const CitySearch = () => {

    return (
        <form>
            <div>
                <InputTextField type="text" name="city" placeholder="Filter by city ..." />
            </div>
        </form>
    );
}



export default CitySearch;