export const replaceRouteId = (route, id) => route.replace(':id', id)

export const getPathParamsByProps = ({ match: { params }}) => params