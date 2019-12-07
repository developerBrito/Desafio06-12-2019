ETEC Professor Horácio Augusto da Silveira
Avaliação de Design Digital – Segundo Bimestre – Usabilidade e Padrões de Projeto

Nome:KLEBER DOS SANTOS BRITO



private void btnBanana_Click(object sender, EventArgs e)
{double banana;
double choppe; 
double guarana;
 try {banana=Convert.ToString(banana);guarana=Math.Sqrt(guarana);choppe=Convert.ToString(choppe);
 guarana=Convert.ToString(guarana); txtResultado.Text = banana,choppe,guarana;} 
 catch(FormatException){ MessageBox.Show("Formatação Errada.");}}


1.	Organize o código acima segundo o que foi explicado nas aulas de técnicas de programação 
afim de garantir legibilidade e sustentabilidade do código.

2.	Desenhe uma classe que implemente o código acima como um método. 
						
						CLASSE PRODUTO
						--------------------
						-banana
						-choppe
						-guarana
						--------------------
						+incluir()
						+alterar()
						+inativar()
						+consultarValidade()
						+inserirPreco()
						


						

class Produto
{
	private string banana;
	private string choppe;
	private string guarana;
	
		public string banana { get => banana; set => banana = value; }
        public string choppe { get => choppe; set => choppe = value; }
        public string guarana{ get => guarana; set => guarana = value; }
}