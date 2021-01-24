package renderer

import (
	"html/template"
	"io"

	"github.com/labstack/echo/v4"
)

type Renderer struct {
	t *template.Template
}

func New() *Renderer {
	return &Renderer{
		t: template.Must(template.ParseFiles("index.html")),
	}
}

func (renderer *Renderer) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return renderer.t.ExecuteTemplate(w, name, data)
}
