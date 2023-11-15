import React, {Component} from 'react';
import TitreH1 from "../../components/Titre/TitreH1";
import Bouton from "../../components/Bouton/Bouton";
import LePays from "./LePays/LePays";
import axios from "axios";


class PaysManager extends Component {

    state ={
        listepays:[],
        loading : false,
        length : 0,
        regionSelection: null,
        numeroPageActuel:1



    }
    loading=()=>{
       return  this.setState({loading : true})
    }

    handleSelectionPaysParRegion=(region)=>{
        let param;
        /*si region = all param est = a region */
        if(region==="all") param=region
            /*sinon param = a autres info*/
        else param=`region/${region}`;
        this.loading()
        axios.get(`https://restcountries.com/v3.1/${param}`)
            .then(reponse =>{
                const lesPays = reponse.data.map(pays =>{
                    return{
                        nom: pays.name.common,
                        nomFrancais: pays.translations.fra.common,
                        capitale: pays.capital,
                        region: pays.region,
                        drapeau: pays.flags.svg
                    }
                })
                console.log(lesPays)
                this.setState({
                    listepays:lesPays,
                    loading:false,
                    length: lesPays.length,
                    regionSelection:region,
                    numeroPageActuel:1

                })

            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading:false
                });
            })
    }



    componentDidMount() {
      this.handleSelectionPaysParRegion("all")
    }





    render() {
        let pagination=[];
        let listePays="";
        if( this.state.listepays){
            let fin = this.state.length/10
            if(this.state.length%10 !==0)fin++;
            for(let i=1; i <= fin; i++ ){
                pagination.push(
                    <Bouton
                        key={i}
                        typeBtn={"info"}
                        estSelection={this.state.numeroPageActuel===i}
                        clic={()=>this.setState({numeroPageActuel:i})}
                    >{i}</Bouton>
                );
            }
        }
        const debut = (this.state.numeroPageActuel-1)*10; // 0*10 = 0 / 1*10 = 10 / 2*10 = 20
        const finListe =this.state.numeroPageActuel*10;
        const listeReduite = this.state.listepays.slice(debut,finListe);
        //console.log(listeReduite)

         listePays= listeReduite.map((pays) =>{
                    return (
                        <div key={pays.nom} className={"col-6 col-md-6"}>
                            {/*le this.props sert a voir le chemin et voir les elements comme match : url,history,path et etc */}
                            <LePays  {...pays} {...this.props}/>
                        </div>
                    )
                })
        return (
            <div className="container">
                <TitreH1>Liste des pays du monde</TitreH1>
                <Bouton
                    typeBtn={"info"}
                    clic={()=>this.handleSelectionPaysParRegion("all")}
                    estSelection={this.state.regionSelection==="all"}
                >Tous</Bouton>
                <Bouton
                    typeBtn={"info"}
                    clic={()=>this.handleSelectionPaysParRegion("Europe")}
                    estSelection={this.state.regionSelection==="Europe"}
                >Europe</Bouton>
                <Bouton
                    typeBtn={"info"}
                    clic={()=>this.handleSelectionPaysParRegion("Africa")}
                    estSelection={this.state.regionSelection==="Africa"}
                >Afrique</Bouton>
                <Bouton
                    typeBtn={"info"}
                    clic={()=>this.handleSelectionPaysParRegion("Asia")}
                    estSelection={this.state.regionSelection==="Asia"}
                >Asie</Bouton>
                <Bouton
                    typeBtn={"info"}
                    clic={()=>this.handleSelectionPaysParRegion("Americas")}
                    estSelection={this.state.regionSelection==="Americas"}
                >Amérique</Bouton>
                <Bouton
                    typeBtn={"info"}
                    clic={()=>this.handleSelectionPaysParRegion("Oceania")}
                    estSelection={this.state.regionSelection==="Oceania"}
                >Océanie</Bouton>
                Nombre de pays : <span className={"badge bg-success"}>{this.state.length}</span>
                {
                    this.state.loading
                    ?


                       <div className="progress">
                           <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
                                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}> </div>
                        </div>


                    : <div className={"row gx"}>
                            {listePays}
                        </div>
                }
                <br/> <div>{pagination}</div>
            </div>
        );
    }

}

export default PaysManager;