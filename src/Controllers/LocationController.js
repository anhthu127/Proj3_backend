import { readLocation } from "../Database/location"
import { city_province, district, village_ward } from "../libs/constants";

class LocationController {

    city = (req, res) => {
        console.log("city: ");
        const request = {
            path: city_province,
            encoding: 'utf8'
        }
        return readLocation(request.path, request.encoding)
    }
    dist = async (req, res) => {
        let parent_code = req.query.parent_code
        console.log(parent_code);
        const request = {
            path: district,
            encoding: 'utf8',

        }
        const fileData = await readLocation(request.path, request.encoding)
        const respone = [];
        if (fileData.length > 0) {
            fileData.map((value, i) => {
                if (value.parent_code === parent_code) {
                    respone.push(value)
                }
            })
        }
        return respone
    }
    village = async (req, res) => {
        const parent_code = req.query.parent_code
        const request = {
            path: village_ward,
            encoding: 'utf8'
        }
        const fileData = await readLocation(request.path, request.encoding)
        const respone = [];
        console.log(fileData);

        if (fileData.length > 0) {
            fileData.map((value, i) => {
                if (value.parent_code === parent_code) {
                    respone.push(value)
                }
            })
        }
        return respone
    }

    location = async (req, res) => {
        const code = req.query.code
         const request = {
            path: village_ward,
            encoding: 'utf8'
        }
        const fileData = await readLocation(request.path, request.encoding)
        const respone = [];
        if (fileData.length > 0) {
            fileData.map((value, i) => {
                if (value.code === code) {
                    console.log(value);
                    respone.push(value)
                }
            })
        }
        return respone
    }

}

export default new LocationController();