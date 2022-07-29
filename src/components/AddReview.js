const AddReview = () => {
            const initialFormData = {
                message: '',
                rating: '',
                username: '',
                // {show.id}: '',
            }
        
            const [formData, setFormData] = useState(initialFormData)
            const [error, setError] = useState(null)
        
            const handleSubmit = (e) =>{
                e.preventDefault()
                console.log(formData)
                addShow(formData)
                .then((show) => {
                    console.log(show)
                    if(show.error){
                        setError(show.error)
                    }else{
                        setError(null)
                        setFormData(initialFormData)
                        window.location.href = '/';
                    }
        
                })
                .catch(e=> {
                    setError(e.response.data.error)
                    console.log(e.response.data)
                })
        
            }
        
            const handleFormData = (e) => {
                setFormData({
                    ...formData,
                    [e.target.id]: e.target.value
                })
            }
            return(
                <>
                    <Box>
                        <Card>
                            <CardContent>
                        <h1>Add Review</h1>
                        {error && <h3>{error}</h3>}
                        <form onSubmit={handleSubmit}>
                            <label>Review:</label>
                            <input type="text" name="message" id="message" onChange={handleFormData}/>
                            <label>Rating:</label>
                            <input type="text" name="rating" id="rating" onChange={handleFormData}/>
                            <label>Username:</label>
                            <input type="text" name="username" id="username" onChange={handleFormData}/>
                            <input type="submit" value="Add Review" />
                            </form>
                            </CardContent>
                        </Card>
                    </Box>
                </>
        
            )
        }

export default AddReview;