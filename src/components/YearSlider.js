import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { setTimelineSelectionStart,
         setTimelineSelectionEnd } from '../store/actions/timelineActions';


const styles = {
    root: {
        width: 316,
        padding: '2px 8px 0px 8px',
        //color: '#52af77',
    },
    slider: {
        width: 300,
	color: '#52af77',
    }
};

function valuetext(value) {
    return `${value}`;
}

class YearSlider extends Component {
    marks = [
        { value: 1900 }, { value: 1910 }, { value: 1920 }, { value: 1930 }, { value: 1940 }, { value: 1950 },
        { value: 1960 }, { value: 1970 }, { value: 1980 }, { value: 1990 }, { value: 2000 }, { value: 2010 },
        { value: 2020 }
    ];

    handleChange = (event, newValue) => {
        const { setTimelineSelectionStart, setTimelineSelectionEnd } = this.props;
        setTimelineSelectionStart(newValue[0]);
        setTimelineSelectionEnd(newValue[1]);
    };

    render() {
        const { classes } = this.props;
        const { timelineSelectionStart, timelineSelectionEnd } = this.props;
        return (
            <div className={classes.root}>
                <Typography color="inherit" id="year-slider" gutterBottom>
                    Year
                </Typography>
                <Slider
		    className={classes.slider}
                    defaultValue={[1900,2020]}
                    onChange={this.handleChange}
                    valueLabelDisplay="on"
                    aria-labelledby="year-slider"
                    getAriaValueText={valuetext}
		    marks={this.marks}
		    step={1}
		    min={1900}
		    max={2020}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        timelineSelectionStart: state.timeline.selectionStart,
        timelineSelectionEnd: state.timeline.selectionEnd,
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setTimelineSelectionStart: (value) => { dispatch(setTimelineSelectionStart(value)) },
        setTimelineSelectionEnd: (value) => { dispatch(setTimelineSelectionEnd(value)) },
    });
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(withStyles(styles)(YearSlider));
