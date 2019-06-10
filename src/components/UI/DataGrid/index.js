import React, { useState, useEffect } from "react";
import Axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import SelectField from "components/UI/Inputs/SelectFields/Select";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
import classNames from "classnames";
import styles from "./styles";
import Fab from "@material-ui/core/Fab";
// Icons
import Sort from "@material-ui/icons/Sort";
import Eye from '@material-ui/icons/RemoveRedEye';
import Search from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import IconList from "components/UI/Icons/SVG/List";
import IconGridList from "components/UI/Icons/SVG/GridList";
import IconGrid from "components/UI/Icons/SVG/Grid";
import LoaderDataList from "./PlaceholderLoader/LoaderDataList";
import LoaderThumbList from "./PlaceholderLoader/LoaderThumbList";
import LoaderImageList from "./PlaceholderLoader/LoaderImageList";

const options2 = [
    {
        value: 5,
        label: 5
    },
    {
        value: 10,
        label: 10
    },
    {
        value: 50,
        label: 50
    },
];

function DataGrid(props) {
    const {
        classes,
        defaultDisplayMode = "DataList",
        order = null,
        ajax,
        columns,
        width,
        displayForPage = false,
        search = true,
        toolbar = true,
        grid,
        onlyInDataList = false
    } = props;

    //Data received from request
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({ items: null, total_count: 0 });

    const request = url => {
        Axios.get(url)
            .then(response => {
                setData({
                    ...data,
                    items: response.data,
                    total_count: response.headers["x-total-count"]
                });
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                throw `Erro na requisição ${error}`;
            });
    }

    //Import by display mode
    const [listDisplayMode, setListDisplayMode] = useState({
        DataList: null,
        ThumbList: null,
        ImageList: null,
        currentDisplaying: null
    });

    const ComponentDisplayMode = listDisplayMode[listDisplayMode.currentDisplaying];

    useEffect(() => {
        setLoading(true);
        setListDisplayMode({
            ...listDisplayMode, 
            currentDisplaying: defaultDisplayMode
        });
        Axios.get(`${ajax.url}?q=${fields.search}&_sort=${fields.sort}&_order=asc&_limit=${fields.page_limit}`)
            .then(response => {
                setData({
                    ...data,
                    items: response.data,
                    total_count: response.headers["x-total-count"]
                });
                importDisplayModeList(defaultDisplayMode);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                throw `DataGrid: Falha na requisição dos dados. ${error}`
            });
    }, []);

    const importDisplayModeList = mode => {
        setListDisplayMode({
            ...listDisplayMode
        });
        if (listDisplayMode[mode]) {
            setListDisplayMode({
                ...listDisplayMode,
                currentDisplaying: mode
            });
            return;
        }

        import(`./${mode}`)
            .then(module => setListDisplayMode({
                ...listDisplayMode,
                [mode]: module.default,
                currentDisplaying: mode,
                loading: false
            }));
    };

    //Components of fields controlled 
    const [fields, setField] = useState({
        sort: "",
        page_limit: "",
        search: ""
    });

    const handleChange = prop => e => {
        let value = e.target.value;
        setField({ ...fields, [prop]: value });
        setLoading(true);

        if (prop === "search") {
            request(`${ajax.url}?q=${value}&_sort=${fields.sort}&_order=asc&_limit=${fields.page_limit}`);
        }
        if (prop === "sort") {
            request(`${ajax.url}?q=${fields.search}&_sort=${value}&_order=asc&_limit=${fields.page_limit}`);
        }
        if (prop === "page_limit") {
            request(`${ajax.url}?q=${fields.search}&_sort=${fields.sort}&_order=asc&_limit=${value}`);
        }
    };

    //Control of display of Toolbar
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if (width !== "xs") {
            setExpand(true);
            return;
        }
        setExpand(false);
    }, [width]);

    const handleClickExpand = () => {
        setExpand(!expand);
    };

    // const [ComponentLoading, setComponentLoading] = useState(null);

    const renderLoading = () => {
        const { currentDisplaying } = listDisplayMode;

        if (currentDisplaying === "DataList") {
            return <LoaderDataList />;
        }
        if (currentDisplaying === "ThumbList") {
            return <LoaderThumbList />;
        }
        if (currentDisplaying === "ImageList") {
            return <LoaderImageList />;
        }

        return null;
    }

    return (
        <div>
            {toolbar ?
                <Fab
                    onClick={handleClickExpand}
                    className={classNames(classes.buttonExpand, "default-background-theme")}
                    size="small"
                >
                    <ExpandMore className={classNames(classes.expand, {
                        [classes.expandOpen]: expand
                    })} />
                </Fab> : null
            }
            <Collapse in={expand}>
                {toolbar ?
                    <Toolbar className={classes.toolbar}>
                        {!onlyInDataList ?
                            <div>
                                <Tooltip title="Lista de dados">
                                    <IconButton
                                        className={classNames({
                                            "active-svg": listDisplayMode.currentDisplaying === "DataList"
                                        })}
                                        onClick={() => importDisplayModeList("DataList")}
                                    >
                                        <IconList />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Lista em miniaturas">
                                    <IconButton
                                        className={classNames({
                                            "active-svg": listDisplayMode.currentDisplaying === "ThumbList"
                                        })}
                                        onClick={() => importDisplayModeList("ThumbList")}
                                    >
                                        <IconGridList />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Lista em imagens">
                                    <IconButton
                                        className={classNames({
                                            "active-svg": listDisplayMode.currentDisplaying === "ImageList"
                                        })}
                                        onClick={() => importDisplayModeList("ImageList")}
                                    >
                                        <IconGrid />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            : null}
                        {order ?
                            <SelectField
                                select
                                fullWidth
                                label="Ordenar"
                                id="simple-start-adornment"
                                value={fields.sort}
                                onChange={handleChange("sort")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <Sort color="disabled" />
                                    </InputAdornment>
                                }}
                                className={classNames(classes.margin, classes.textField)}
                                options={order}
                            />
                            : null
                        }
                        {search ?
                            <TextField
                                label="Pesquisar"
                                fullWidth
                                className={classNames(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <Search color="disabled" />
                                    </InputAdornment>
                                }}
                                value={fields.search}
                                onChange={handleChange("search")}
                            />
                            : null
                        }
                        {displayForPage ?
                            <div className={classes.pageLimit}>
                                <SelectField
                                    select
                                    fullWidth
                                    label="Exibir"
                                    value={fields.page_limit}
                                    onChange={handleChange("page_limit")}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <Eye color="disabled" />
                                        </InputAdornment>
                                    }}
                                    options={options2}
                                />
                            </div> : null
                        }
                    </Toolbar> : null}
                {toolbar ? <Divider className={classes.divider} /> : null}
            </Collapse>

            <div className={classes.displayList}>
                {loading ? renderLoading() : null}
                {ComponentDisplayMode ? <ComponentDisplayMode data={data.items} columns={columns} grid={grid} /> : null}
            </div>
        </div>
    );
}

DataGrid.propTypes = {
    ajax: PropTypes.object.isRequired,
    displayMode: PropTypes.string,
    columns: PropTypes.array.isRequired
};

export default withWidth()(withStyles(styles)(DataGrid));
