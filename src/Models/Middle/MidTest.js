class MidTest {

    uploadFile = (profile, data) => {
        console.log("data:   ", data);
        console.log("profile    ", profile);
        const a = {
            profile,
            testData: "test"
        }
        return a
    }
}

export default new MidTest();
