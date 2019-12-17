import React, { Component } from "react"


class earn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sortField: '',
            sortDirection: 'ASC',
            records: [],
            moreDetail: false,
            pageSize: 20,
            currentPage: 1,
            count: 0
        }
    }

    

    render() {
        // const { name, symbol } = this.state
        // console.log(this.state)
        return <div>
                    <div dangerouslySetInnerHTML={{__html: this.props.pageContext.title}} />
                    <div dangerouslySetInnerHTML={{__html: this.props.pageContext.content}} />
                </div>;
    }

}

export default earn