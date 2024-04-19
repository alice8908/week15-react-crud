import React from "react";
import { House } from "./House.js"
import { housesApi } from "../rest/HousesApi.js";
import { NewHouse } from "./NewHouse.js";

// List of houses
export class HouseList extends React.Component {
    state = {
        houses:[]
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({houses});
    };

    updateHouse = async (updateHouse) => {
        await housesApi.put(updateHouse);
        this.fetchHouses();
    };

    addHouse = async (newHouse) => {
        await housesApi.pose(newHouse);
        this.fetchHouses();
    };

    render() {
        return(
            <div>
                <h1>House List</h1>
                <NewHouse addHouse = {this.addHouse}/>
                {this.state.houses.map((house) =>(
                    <House
                        house = {house}
                        key = {house._id}
                        updateHouse = {this.updateHouse}
                        addHouse = {this.addHouse}
                        />
                ))}
            </div>
        );
    }
}