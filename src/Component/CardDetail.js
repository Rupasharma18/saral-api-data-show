import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';


const styles = () => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: 10,
            width: 200,
            height: 100,
        },

    },


});

class CardDetail extends Component {
    constructor() {
        super()
        this.state = {
            cardData: []

        }
    }
    componentDidMount() {
        axios.get('https://saral.navgurukul.org/api/courses')
            .then(res => {
                this.setState({
                    cardData: res.data.availableCourses,
                })
            })
            .catch(error => console.log(error));

    }




    render() {
        const { classes } = this.props;
        // console.log(this.state.cardData, "#########################")
        return (
            <div className="container mt justify-content-center">
               <p className="text-center mb-5">Aap yeh courses mein enroll kar skte hai</p>
                <div className="row justify-content-center m-auto">

                    {this.state.cardData.map((item, i) => {
                        return (
                            <div key={i} className="col-md-4">
                                <Card className="mb-3">
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterTop variant="p" component="p">
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                        <CardMedia
                                            component="img"
                                            alt={item.name}
                                            image={item.logo}
                                        />
                                    </CardActionArea>
                                </Card>
                            </div>

                        )
                    })}
                </div>
            </div>



        );
    }
}
CardDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CardDetail);




