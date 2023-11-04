import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
} //filhos do componente "children", serve para criar componentes que aceita "coisas" dentro dele

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
