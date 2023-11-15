import React, {Component} from 'react';
import TitreH1 from "../../components/Titre/TitreH1";
import LePays from "../PaysManager/LePays/LePays";
import axios from "axios";

class UnPays extends Component {
    state={
        data:null,
        loading:false
    }


    componentDidMount() {
        this.setState({loading:true})
        axios.get(`https://restcountries.com/v3.1/name/${this.props.nomPays}?fullText=true`)
            .then(reponse =>{
                console.log(reponse.data)
                this.setState({
                    loading:true,
                    data:reponse.data[0]
                })

            })
            .catch((error)=>{
                console.log(error)
                this.setState({loading:false})

            })
    }

    render() {
        return (
            <>
                <div className={"container"}>
                   <TitreH1> Page du pays : {this.props.nomPays}</TitreH1>
                    {
                        this.state.data &&
                        < LePays
                        nom={this.state.data.name.common}
                        nomFrancais={this.state.data.translations.fra.common}
                        drapeau={this.state.data.flags.svg}
                        capitale={this.state.data.capital}
                        region={this.state.data.region}
                        {...this.props}
                        //sert a montrer tous les pays si solo est a true regarder dans LePays
                        solo={true}
                        population={this.state.data.population}
                        border={this.state.data.borders.map(border=>{
                            console.log(border)
                            return <l>{border}    </l>
                        })}
                        />
                    }
                </div>
            </>
        );
    }
}

export default UnPays;