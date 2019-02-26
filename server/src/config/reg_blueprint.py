from src.blueprints.product import product_bp
from src.blueprints.article import article_bp
from src.blueprints.music import music_bp
from src.blueprints.feature import feature_bp

def reg(app):
	app.register_blueprint(product_bp)
	app.register_blueprint(article_bp)
	app.register_blueprint(music_bp)
	app.register_blueprint(feature_bp)
	return app